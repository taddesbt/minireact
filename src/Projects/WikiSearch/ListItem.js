
    const ListItem = ({  pageid, title, snippet } ) => {
  

        let resultURL = `https://en.wikipedia.org/?curid=${pageid}`;



        return (
            <div className="result p-2">
                <a href={resultURL} 
                   target="_blank" 
                   rel="noopener" 
                   className="h3 fw-bold"
                   >{title}</a>
                <br />
                <a
                    href={resultURL}
                    target="_blank"
                    rel="noopener"
                    className="fs-5 text-success"
                >{resultURL}</a
                >
                <p className="fs-5">
                    {snippet}
                </p>
            </div>


        )
    }

    export default ListItem