function LeftImgSection({
  imgSrc,
  productTitle,
  productDescription,
  firstLinkTitle,
  firstLinkUrl,
  secondLinkTitle,
  secondLinkUrl,
  googlePlayLink,
  appStoreLink,
}) {
  return (
    <div className="row mb-5 pb-5 leftImgSection">
      <div className="col-md-6 py-2 firstHalf">
        <img src={imgSrc} alt="Product Image" />
      </div>
      <div className="col-2 p-5"></div>
      <div className="col-md-4 py-5 secondHalf">
        <h2 className="mt-3">{productTitle}</h2>
        <p className="mt-4">{productDescription}</p>
        <div className="firstLinks">
          <a href={firstLinkUrl}>{firstLinkTitle}</a>
          <a href={secondLinkUrl}>{secondLinkTitle}</a>
        </div>
        <div className="secondLinks">
          <a href={googlePlayLink}>
            <img src="/media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStoreLink}>
            <img src="/media/images/appStoreBadge.svg" className="secondImg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftImgSection;
