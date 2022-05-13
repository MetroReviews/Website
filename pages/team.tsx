import axios from "axios"
import { toast } from "react-toastify"

export default function Team({ $, team }) {

  if (!team) toast.success('Member Data is loading. If this hangs please refresh the page')

    return (
        <div>
            <div className="pt-10 mx-auto flex flex-col items-center justify-center">
                <p className="animateHeader text-4xl font-extrabold text-white">
                    {$.team.title}
                </p>
                <p dangerouslySetInnerHTML={{ __html: $.team.description }} className="animateHeader text-white text-opacity-50 text-center mt-5">
                    
                </p>
            </div>
            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-auto">
                {!team ? <div className="col-span-1 md:col-span-2 flex items-center justify-center">
                    <i className="fad fa-spinner-third fa-spin text-white text-2xl" />
                </div> : (team.map((member, index) => (
                    <div key={index} className="flex flex-col justify-center text-white rounded w-auto">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-br from-neutral-900/80 to-neutral-900/20 p-3 rounded-lg w-auto h-auto border border-amber-800">
                            <img className="rounded-full h-24 w-24" alt={member.username} src={!member.avatar ? `/img/defaultUser.webp` : member.avatar} />
                            <div>
                                <h1 className="leading-none text-xl font-bold text-white">
                                    {member.username}
                                </h1>
                                <br />
                                <h3 className="leading-none text-md bg-clip-text bg-gradient-to-br text-white">
                                   <span className="text-amber-500 font-bold">Position:</span> {
                                    member.is_list_owner ? `${ $.team.roles.owner }` :
                                    member.sudo ? `${ $.team.roles.sudo }` :
                                    `${ $.team.roles.review }`
                                   }
                                </h3>
                                <h3>
                                  <span className="text-amber-500 font-bold">Staff In:</span>  {member.roles.join(", ")}
                                </h3>
                                <h3>
                                  <span className="text-amber-500 font-bold">Profile:</span> <a href={"https://discordapp.com/users/" + member.id} className="text-blue-500 hover:text-blue-700">Click Me</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    );
};

module.exports.getServerSideProps = async ({ req }) => {
    if (req) {
      try {
  
        let data = await axios.get('https://catnip.metrobots.xyz/team');
  
        let users = data.data

        let owner;
        let sudo;
        let review;
  
        return { props: { team: users }}
  
      } catch (e) {
  
        return { props: { title: 'Error Fetching' }}
  
      }
    } else {
  
      return { props: { title: 'Error Fetching' }}
    }
  }