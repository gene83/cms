import { FaChevronDown } from 'react-icons/fa';
import './NewPost.scss';

type Category = '' | 'Vehicles' | 'Sporting Goods' | 'Clothing';
const CATEGORIES: Category[]  = ['', 'Vehicles', 'Sporting Goods', 'Clothing'];

const NewPost = () => {

    return (
        <div className="post-container">
            <h1>New Post</h1>
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