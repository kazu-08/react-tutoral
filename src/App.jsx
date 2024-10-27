import React ,{useEffect, useState} from "react";

export default function App() {
    const [selectImage,setSelectImage] = useState({
        src:"/image/pic.jpg",
        alt:"Closeup of a human eye"
    })
    const obj = [
        { src: "./images/pic1.jpg", alt: "Closeup of a human eye" },
        { src: "./images/pic2.jpg", alt: "Rock that looks like a wave" },
        { src: "./images/pic3.jpg", alt: "Purple and white pansies" },
        { src: "./images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
        { src: "./images/pic5.jpg", alt: "Large moth on a leaf" }
    ];

    const ImageClick = (image) =>{
        setSelectImage(image);
    }

    const [showForm, setShowForm] = useState(true)

useEffect(() => {
    setShowForm(false)
}, [])


    return (
        <>
            <h1>Image gallery example</h1>
            <div className="full-img">
                <img
                    className="displayed-img"
                    src={selectImage.src}
                    alt={selectImage.alt}
                />
                <div className="overlay"></div>
                <button className="dark">Darken</button>
            </div>
            <div className="thumb-bar">
                {obj.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} onClick={()=>ImageClick(image)}/>
                ))}
            </div>
        </>
    );
}
