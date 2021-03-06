import React, {useEffect, useState} from "react";
import {user, v_sign} from "../../../assets/images/icons";
import {adi, iris, shimon, stav} from "../../../assets/images/founders-imgs";
import {setUsers} from "../../../store/actions/taskAction";
import {Box, Modal} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
// import DropdownPermits from "./DropdownPermits";

const imgUsers = [adi, stav, iris, shimon]

const UserPermissions = ({toggleLinks, setToggleLinks}) => {

    const [open, setOpen] = useState(false);
    const [searchUser, setSearchUser] = useState("")
    const [userClicked, setUserClicked] = useState([]);
    //   const { pplAssigned } = toggleMode;
    const {users} = useSelector(({entities}) => entities.taskModule)
    //   const { taskContent, setTaskContent } = useContext(TaskContext);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('hi')
        dispatch(setUsers())
    }, [])

    const applyUsers = () => {
        if (searchUser)
            return users.filter((user) => {
                    const name = `${user.firstName} ${user.lastName}`

                    return user.firstName.toLowerCase().startsWith(searchUser.toLowerCase()) ||
                        user.lastName.toLowerCase().startsWith(searchUser.toLowerCase())

                }
            );
        return users;
    };
    const isChoosen = (user) => {
        return userClicked.some((u) => u.id === user.id);
    };
    const userChoosen = (u) => {
        if (isChoosen(u)) {
            const filterUser = userClicked.filter((user) => user.id !== u.id);
            setUserClicked(filterUser);
        } else {
            setUserClicked((p) => [...p, u]);
            //   setTaskContent(p => {
            //     const prevUsers = p.pplAssigned;
            //     return { ...p, pplAssigned: [...prevUsers, u] };
            //   })
        }
    };

    useEffect(() => {
        toggleLinks && setOpen((p) => !p);
    }, [toggleLinks]);

    return (
        <Modal
            className="modals"
            open={open}
            onClose={() =>
                setToggleLinks((p) => ({...p, toggleLinks: !p.toggleLinks}))
            }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="box-modal">
               
                <div className="ppl-assigned-headline-perm flex justify-center space-between">
                    {/* <span className="btn-close"
            onClick={() => setToggleLinks((p) => ({
              ...p,
              toggleLinks: !p.toggleLinks,
            }))
            }>
            <img src={close_sign} />
          </span> */}
                    <div className="ppl-assigned-title flex align-center">
                        ???????????? ?????????????? &nbsp;
                        <img src={user} alt="ppl-assigned-title"/>
                    </div>
                </div>
                <hr style={{width: "300px"}}/>
                <input
                    type="text"
                    value={searchUser}
                    className="addLinkInput"
                    onChange={(e) => setSearchUser(e.target.value)}
                    placeholder="..?????? ??????????"

                />
                <div className="users-assigned">
                    {applyUsers().map((user, i) => {
                        const {firstName, lastName} = user;
                        // const { name, userImg } = user;
                        return (
                            <div
                                key={user.id}
                                // key={name}
                                className="each-user-perm flex align-center space-between"
                                onClick={() => userChoosen(user)}
                            >
                                <object
                                    data={imgUsers[i % 4]}
                                    type="image/svg+xml"
                                    style={{width: "30px", margin: "10px"}}
                                ></object>
                                <p style={{textTransform: "capitalize"}}>
                                    {firstName}&nbsp;{lastName}
                                </p>

                                <select name="dropdownPermits" className='dropdownPermits'>
                                    <option value="?????????? ??????????">
                                        ?????????? ??????????
                                    </option>
                                    <option value="?????????? ???????? ??????????">
                                        ?????????? ???????? ??????????
                                    </option>
                                    <option value="?????????? ??????????">
                                        ?????????? ??????????
                                    </option>
                                    <option value="???????? ???????????? ">
                                        ???????? ????????????
                                    </option>
                                </select>


                                {/* {isChoosen(user) && (
                                    <img src={v_sign} alt="v-sign" style={{margin: "20px"}}/>

                                )} */}
                            </div>
                        );
                    })}
                </div>
                <div className='submit-btn'>
                <button className="btn-save"
                        onClick={() => setToggleLinks((p) => ({...p, toggleLinks: !p.toggleLinks}))}>
                    ????????
                </button>
                </div>
              
            </Box>
        </Modal>
    );
};

export default UserPermissions;


