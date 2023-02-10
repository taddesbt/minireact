const ListItems = ({ Accord, desc }) => {




    const handleClick = (e) => {

        // this.classList.toggle("active");
        const desc = e.target.nextElementSibling;
        const allDesc = document.querySelectorAll(".desc");
        const activeAcc = document.getElementsByClassName("accordion active");
        // console.log(desc);
        // console.log(desc.scrollHeight);
        if (desc?.style?.maxHeight) {
            desc.style.maxHeight = null;
            e.target.classList.remove("active");
        } else {
            // Remove active class from all tabs
            for (let i = 0; i < activeAcc.length; i++) {
                activeAcc[i].classList.remove("active");
            }

            // Set the maxHeight of all desc to 0
            for (let i = 0; i < allDesc.length; i++) {
                allDesc[i].style.maxHeight = null;
            }

            // open the current tab clicked
            desc.style.maxHeight = desc.scrollHeight + "px";
            e.target.classList.add("active");
        }




    }



    return (<>

        <div className="accordion" onClick={handleClick}>
            <p>{Accord}</p>
        </div>
        <div className="desc">
            <p>
                {desc[0]}
            </p>
            <br /><br />
            <p>
                {desc[1]}
            </p>
        </div>

    </>)

}

export default ListItems