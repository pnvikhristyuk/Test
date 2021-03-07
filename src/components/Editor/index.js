import React, {useState} from 'react';
import './index.scss';

const Editor = ({
        product = {name: "", sku: "", price: "", image: "", available: ""},
        result = () => {}
    }) => {

    const [image, setImage] = useState(product.image);
    const [name, setName] = useState(product.name);
    const [sku, setSku] = useState(product.sku);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);

    // handlers
    const handleSave = () => {
        result({
            name,
            sku,
            image,
            available,
            price: Number.isInteger(Number(price)) ? String(price) + '.00' : price
        })
    };

    return (
        <div className="editor container">
            <div className="editor__body">
                <div className="editor__body-left">
                    <div className="editor__row">
                        <div className="editor__label">Name:</div>
                        <div className="editor__input-holder">
                            <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                        </div>
                    </div>
                    <div className="editor__row">
                        <div className="editor__label">SKU:</div>
                        <div className="editor__input-holder">
                            <input type="text" onChange={e => setSku(e.target.value)} value={sku}/>
                        </div>
                    </div>
                    <div className="editor__row">
                        <div className="editor__label">Price:</div>
                        <div className="editor__input-holder">
                            <input type="text" onChange={e => setPrice(e.target.value)} value={price}/>
                        </div>
                    </div>
                    <div className="editor__row">
                        <div className="editor__label">Image:</div>
                        <div className="editor__input-holder">
                            <input type="text" onChange={e => setImage(e.target.value)} value={image}/>
                        </div>
                    </div>
                    <div className="editor__row">
                        <div className="editor__label">Available:</div>
                        <div className="editor__input-holder">
                            <input type="text" onChange={e => setAvailable(e.target.value)} value={available}/>
                        </div>
                    </div>
                </div>
                <div className="editor__body-img-preview" style={{backgroundImage: `url(${image})`}}/>
            </div>
            <div className="btn-holder">
                <button className="btn" onClick={handleSave}>Save changes</button>
            </div>

        </div>
    )
};

export default Editor;