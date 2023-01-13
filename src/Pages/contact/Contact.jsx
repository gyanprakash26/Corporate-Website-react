import "./contact.css";
export default function Contact() {
    function logInHandle(e){
        e.preventDefault()
    }
    return (
        <>
            <div className="contact" id="contact">
                <div className="socialHandling row">
                    <h1 className='s-heading'>More Contact</h1>
                    <div className="s-content column">
                        <span>Official Contact</span> <br></br> <br></br>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                <span>Contact</span><br></br>
                                <a href="tel:+91-7669002505"> +91-766882505</a><br></br><br></br>
                                <span>Email</span><br></br>
                                <a href="mailto:gyanprakash2698@gmail.com">Email</a>
                            </td>
                            <td>
                                <div className="f-content">
                                    <span>Linkedin</span><br></br>
                                    <a href="tel:+91-7669002505">linkedin link</a><br></br><br></br>
                                    <span>Twitter</span><br></br>
                                    <a href="mailto:gyanprakash2698@gmail.com">twitter</a>
                                </div>
                            </td> 
                            </tr>
                           </tbody>
                        </table>
                    </div>
                    <div className="form column">
                        <form onSubmit={logInHandle}>
                            <label>Name:<br></br><input type="text" name="name" /></label>
                            <label>Email: <br></br><input type="email" name="email" /></label>
                            <label>Phone No:<br></br><input type="number" name="no" /></label>
                            <label>Select:<br></br><select>
                                <option>Web Development</option>
                                <option>Maintenance</option>
                                <option>Blockchain Development</option>
                                <option>Testing</option>
                                <option>Database</option>
                            </select></label>
                            <label>Message:<br></br><textarea id="mess" name="mess" rows="4" cols="50"></textarea></label><br></br>
                            <div className="submit-but">
                                <input type="submit" value="Submit" />
                            </div>
                            
                        </form>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1451.2555417180345!2d77.19889574854659!3d28.63297707463059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d2dc76b52aa7f6e!2sShri%20Laxmi%20Narayan%20Temple%20(Birla%20Mandir)!5e0!3m2!1sen!2sin!4v1672583933847!5m2!1sen!2sin" width="100%" height="282" loading="lazy" title="This is a unique title"></iframe>
                </div>
            </div>
        </>
    )
}