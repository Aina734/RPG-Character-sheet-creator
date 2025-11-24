import "./UserExample.css"

function UserExample() {
    return (
        <>
       
        <h2>How Would Your Character Turn Out!</h2>
    <section className="example-template">
        <article>
            <h3>Check the Result of our Template</h3>
            <div>
                <img src="https://placehold.co/600x400" alt="placeholder for pic of character template"/>
            </div>
        </article>

        <article>
              <h3>Character Creation Demo</h3>
            <div>
                <video controls>
                     <source src="src/media/placeholder-video.mp4" 
                     type="video/mp4"/>
                </video>
            </div>
        </article>

        </section>
        
        </>
    )
}

export default UserExample