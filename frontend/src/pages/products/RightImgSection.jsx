function RightImgSection({ productTitle, productDescription, firstLinkUrl, firstLinkTitle,
    imgSrc }) {
    return (
        <div className="row rightImgSection">
            <div className="col-md-4 my-5 py-5 firstHalf">
                <h2 className="mt-5">{productTitle}</h2>
                <p className="mt-4">{productDescription}</p>
                <div className="firstLink">
                    <a href={firstLinkUrl}>{firstLinkTitle}</a>
                </div>
            </div>
            <div className="col-md-6 px-5 secondHalf">
                <img src={imgSrc} alt="Product Image" />
            </div>
            <div className="col-2 p-5"></div>
        </div>
    );
}

export default RightImgSection;