import Photo from "../assets/umer.jpg"

const About = ({ mode }) => {
    let style = {
        color : mode === "dark" ? "white" : "black"
    }
  return (
    <> 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">      
                    <img className='my-3' src={Photo} alt="user" height={300}/>    
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div style={style}>
                        <h2>About Us</h2>
                        <p>Diligent software engineer with 3+ years of experience in commercial application development. Eager to join your organization to build innovative and cutting-edge business solutions for the impressive suite of clients within its global reach. Take tasks and complete on-time on the project. Also identified and dealt with a significant process that boosted coding efficiency by 35% when resolved. good communication with clients to ensure success. Always ready to learn new skills and techniques to improve my work experience. My key skills are good communication, giving attention to detail, teamwork,problem-solving, leadership, Perseverance and motivation, ability to work under pressure.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About