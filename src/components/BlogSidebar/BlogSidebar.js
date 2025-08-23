import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog-details/author.jpg'
import blogs from '../../api/blogs'


import inst1 from "../../images/instragram/7.jpg";
import inst2 from "../../images/instragram/8.jpg";
import inst3 from "../../images/instragram/9.jpg";
import inst4 from "../../images/instragram/10.jpg";
import inst5 from "../../images/instragram/11.jpg";
import inst6 from "../../images/instragram/12.jpg";

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Bernard Rodgers</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <ul>
                            <li><Link onClick={ClickHandler} to="/blog">Asbestos Remediation<span>5</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">International Planning<span>7</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Mechanical Engineering<span>3</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Oil & Gas Engineering<span>2</span></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Painting and Protective<span>8</span></Link></li>
                        </ul>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.recent} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Link onClick={ClickHandler} to="/blog-single/1"><img src={inst1}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1"><img src={inst2}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1"><img src={inst3}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1"><img src={inst4}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1"><img src={inst5}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1"><img src={inst6}
                            alt="" /></Link></li>
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Accountant</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Engineering</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Industrial</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Mechanical</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Oil & Gas</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Painting</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Petroleum</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Success</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
