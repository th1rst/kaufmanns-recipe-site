import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { FaShareAlt } from "react-icons/fa";

export default function SocialShare() {
  const MouseOver = (event) => (event.target.style.fill = "rgb(235, 198, 96)");
  const MouseOut = (event) => (event.target.style.fill = "");

  return (
    <div className="social-share-container-outer">
      <FaShareAlt className="share-icon" />
      <p className="properties-text">Teilen</p>
      <div className="social-share-container-inner">
        <EmailShareButton url={window.location.href}>
          <EmailIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </EmailShareButton>
        <FacebookShareButton url={window.location.href}>
          <FacebookIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </FacebookShareButton>
        <LinkedinShareButton url={window.location.href}>
          <LinkedinIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </LinkedinShareButton>
        <PinterestShareButton url={window.location.href}>
          <PinterestIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </PinterestShareButton>
        <RedditShareButton url={window.location.href}>
          <RedditIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </RedditShareButton>
        <TelegramShareButton url={window.location.href}>
          <TelegramIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </TelegramShareButton>
        <TwitterShareButton url={window.location.href}>
          <TwitterIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </TwitterShareButton>
        <WhatsappShareButton url={window.location.href}>
          <WhatsappIcon
            className="social-icon"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            size={40}
            round={true}
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
