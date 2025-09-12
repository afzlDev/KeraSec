export default function ReachUs(){
    return(
    <div className="reach_root">
        <div className="rch_left">
            <div className="reach_h1">
                <h1>Reach Us</h1>
            </div>
            <div className="reach_p">
                <p>To stay safe these days,you need US.</p>
            </div>
        </div>
        <div className="rch_right">
            <div className="rch_lst">
                <div className="rch_name">
                    <span>Name</span>
                    <input type="email" placeholder="EG:thakkudu@gmail.com"/>
                </div>
                <div className="rch_email">
                    <span>Email</span>
                    <input type='name' placeholder="EG: Thakkudu"/>
                </div>
                <div className="rch_msg">
                    <span>Message</span>
                    <textarea placeholder="Type your message here..."/>
                </div>
                <div className="rch_btn">
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>  
    )
}