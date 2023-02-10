import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './githubprofile.css'

const apiURL = "https://api.github.com/users/";


export default function GithubProfile() {

    const [user, setUser] = useState('')
    const [Repo, setRepo] = useState([])
    const inputRef = useRef()


    const handleSubmit = (e) => {
        e.preventDefault();


        let trimUser = inputRef.current.value.split(' ').join('')

        if (trimUser === '') {

            console.log("Input can not be blank");
        }
        else {
            getUser(trimUser)
            console.log(user)

        }


    }

    async function getUser(username) {
        const response = await fetch(apiURL + username);
        const data = await response.json();

        //   console.log(data);
        if (!response.ok) {
            console.log("User not found, try another");
        } else {
            //   displayData(data);
            setUser(data)
            getRepos(username);
        }
    }

    // Get Repos
    async function getRepos(username) {
        const response = await fetch(apiURL + username + "/repos");
        const data = await response.json();


        setRepo(data)
        // console.log(data);
        // displayRepos(data);
    }








    return (<>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="" className="navbar-brand">
                    <i className="fab fa-github"></i>
                    GitHub Profile App
                </a>
                <form action="" className="d-flex" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="from-control me-2 search"
                        placeholder="Enter Username"
                        ref={inputRef}
                        // value={user}
                        // onChange={(e) => setUser(e.target.value)}
                    />
                    <button type="submit" className="btn btn-outline-success">Search</button>
                </form>
            </div>
        </nav>

        <section>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3 ms-3">

                        {user && <div className="profile">
                            <img
                                src={user.avatar_url}
                                alt={user.name}
                                className="img-thumbnail rounded-circle"
                            />
                            <h2>{user.name}</h2>
                            <p>{user.login}</p>
                            <div className="d-grid">
                                <a href={`https://github.com/${user.login}`} className="btn btn-outline-secondary">View Profile</a>
                            </div>
                            <p className="pt-2">
                                <span>{user.followers} Followers </span>
                                <span>{user.following}  Following</span>
                            </p>
                            <p>{user.public_repos}</p>
                            <p><i className="fas fa-marker-alt"></i>{user.location}</p>
                        </div>


                        }








                    </div>


                    <div className="col-md-8">
                        {(Repo.length) ? <div>
                            <h2 className="hide">Latest Repositories</h2>
                            <div className="repos">

                                {Repo.map((repo, index) => {

                                    return (
                                        <span class="repo border border-rounded p-3">
                                            <a href={repo.html_url} target="_blank" rel="noopener">{repo.name}</a>
                                            <p>
                                                <strong>Stars: {repo.starazers_count} |</strong>
                                                <strong>Watchers: {repo.watchers_count} |</strong>
                                                <strong>Forks: {repo.forks_count}</strong>
                                            </p>
                                        </span>
                                    );
                                })

                                }

                            </div>
                        </div>
                            :

                            <p className="alert alert-danger">
                                Search Username in the Form Above
                            </p>


                        }

                    </div>





                </div>
            </div>
        </section>


    </>
    )
}
