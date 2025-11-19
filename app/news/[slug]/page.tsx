import React from "react";
import "./page.css";
import { Metadata } from "next";
import { useParams } from "next/navigation";



const NewsPage = () => {
    // get dynamic slug value in function based component from url

        return (
            <div className="news-container">
                <div className="news-header">
                    <p className="news-date">Published on June 10, 2024</p>
                </div>
                <div id="fb-root"></div>
<script async="1" defer="1" crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v24.0"></script><div class="fb-video" data-href="https://web.facebook.com/modernhospitalsitakund/videos/%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-%E0%A6%9A%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A7%8E%E0%A6%B8%E0%A6%95%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%A4%E0%A6%BE-%E0%A6%AC%E0%A7%83%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%BF%E0%A6%B0-%E0%A6%B2%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A7%8D%E0%A6%AF%E0%A7%87-%E0%A6%B8%E0%A7%80%E0%A6%A4%E0%A6%BE%E0%A6%95%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%AE%E0%A6%A1%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A3-%E0%A6%B9%E0%A6%B8%E0%A6%AA%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%85%E0%A6%A8%E0%A7%81%E0%A6%B7%E0%A7%8D%E0%A6%A0%E0%A6%BF%E0%A6%A4-%E0%A6%B9%E0%A6%B2%E0%A7%8B-%E0%A6%8F/1726575561343311/" data-app-id="887156172104257"></div>
                <div className="news-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, a facilisis enim leo nec urna.
                    </p>
                    <p>
                        Vivamus vel augue nec urna dictum cursus. Etiam euismod, justo at pretium cursus, urna erat dictum erat, nec dictum urna erat nec urna.
                    </p>
                </div>
                <div className="news-footer">
                    <span className="news-author">By Modern Hospital Editorial Team</span>
                </div>
            </div>
        );
    }
export default NewsPage;