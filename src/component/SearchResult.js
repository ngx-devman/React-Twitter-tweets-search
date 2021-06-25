import React, { useState } from 'react'

function SearchResult(props) {
   const [result, setResult] = useState(false);
    return (
            <ul className="list-group">
                {
                    props.lists.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <div className="card-body text-start">
                                    <div className="card-title">
                                        <img src={item.user.profile_image_url_https} className="rounded-circle me-md-3" alt="logo" />
                                        <span>
                                            <a href={`https://twitter.com/${item.user.screen_name}`} target="_blank" rel="noreferrer noopener">
                                                @{item.user.name.replace(/\s/g, '')}
                                            </a>
                                        </span>
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>    
                                </div>
                            </li>
                        )  
                    })
                }
            </ul>
            
        
    )
}

export default SearchResult