import { FaChevronDown } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import './NewPost.scss';
import { useCallback, useState } from 'react';

type Category = '' | 'Vehicles' | 'Sporting Goods' | 'Clothing';
const CATEGORIES: Category[]  = ['', 'Vehicles', 'Sporting Goods', 'Clothing'];

type Image = { id?: number, src: string }


const NewPost = () => {
    const [images, setImages] = useState<Image[]>([]);

    const onDrop = useCallback((files: File[]) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            setImages((prevState) => [
                ...prevState,
                { src: e.target?.result } as Image
            ])
        }
        files.map((file) => {
            reader.readAsDataURL(file);
            return file;
        })
    }, []); 

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'], 
            'image/png': ['.png'] 
        },
        maxFiles: 6,
        onDrop,
    });
    

    const previews = images.map((image,idx) => (
        <div key={idx}>
            <img src={image.src} alt="not found" />
        </div>
    ))

    return (
        <div className="post-container">
            <h1>New Post</h1>
            <section className="container">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop here, or click to select files</p>
                </div>
                <aside>
                    <h4>Files</h4>
                    <ul>{previews}</ul>
                </aside>
            </section>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const post = {
                    title: formData.get("title")?.toString() ?? '',
                    price: formData.get("price")?.toString() ?? '',
                    category: formData.get("category")?.toString() ?? '',
                    description: formData.get("description")?.toString() ?? ''
                }

                console.log(post);
            }}>
                <div className="col">
                    <input type="text" name="title" placeholder="title" />
                    <input type="text" name="price" placeholder="Price" />
                    <select name="category">
                        {
                            CATEGORIES.map(category => (<option key={category} value={category}>{category}</option>))
                        }
                    </select>
                    <h3>More Details</h3>
                    <div className="row">
                        <p>Attract more interest by including more details.</p>
                        <FaChevronDown />
                    </div>
                    <input className='description' type="text" name="description" placeholder="Description" />
                    <button type="submit">Publish</button>
                </div>
            </form>
        </div>
    )
}

export default NewPost