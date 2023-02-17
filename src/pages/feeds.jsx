

const Feeds = () => {
    return (  
        <main>
            <div className="container py-md-3">
                <div className="row">
                    <div className="col-md-3 p-md-2">
                        <div className="card">
                            side bar
                        </div>
                    </div>
                    <div className="col-md-6 p-md-2">
                        
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="/img/default-profile.png" className="img-fluid rounded " />
                                    </div>
                                    <div className="col-9">
                                        <form>
                                            <textarea cols="40" rows="2" className="w-100 p-2" placeholder="Share what's on your mind..."></textarea>
                                            <input type="submit" name="submit" value="Post" className="btn btn-sm button" />
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-3 p-md-2">
                        <div className="card">
                            sidebar
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Feeds;