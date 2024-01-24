import Cookpal from "../../Images/Cookpal.png"

const Footer=()=>{

    return (<div>
        <div class="footer">
            <div class="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum doloribus accusantium, reiciendis mollitia accusamus sit quasi fugit. Non iste, qui, voluptates ad ab laudantium aliquid veritatis nesciunt provident commodi nam. Quod exercitationem at eligendi, ab incidunt, tenetur necessitatibus autem, nihil pariatur reprehenderit sunt aliquam officiis quos laboriosam.</p>
            </div>
            <div class="company">
                <h2>company</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Activity</a></li>
                </ul>
            </div>
            <div class="resources">
                <h2>Resources</h2>
                <ul>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Use cases</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Insights</a></li>
                </ul>
            </div>
            <div class="address">
                <img src={Cookpal} alt="" />
                <p>No link in the footer is working. If you want to test navigation skills, then go to navbar.</p>
                <input type="mail" placeholder="Your Email" />
                <button class="sub">Subscribe</button>
            </div>
        </div>
    </div>)
}

export default Footer;