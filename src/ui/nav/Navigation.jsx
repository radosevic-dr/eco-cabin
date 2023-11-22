import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoHomeOutline, IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { MdCabin } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";

const links = [
    {
        id: 1,
        href: "dashboard",
        name: "Home",
        icon: <IoHomeOutline />,
    },
    {
        id: 2,
        href: "bookings",
        name: "Bookings",
        icon: <IoBookOutline />
    },
    {
        id: 3,
        href: "cabins",
        name: "Cabins",
        icon: <MdCabin />
    },
    {
        id: 4,
        href: "users",
        name: "Users",
        icon: <FaUsersLine />
    },
    {
        id: 5,
        href: "settings",
        name: "Settings",
        icon: <IoSettingsOutline />
    }
];

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Link = styled(NavLink)`
    display: flex;
    justify-items: center;
    align-items: center;
    align-content: center;
    gap: 2rem;
    font-size: 2rem;
    padding: 1rem 2rem;

    &:hover{
        background-color: var(--color-grey-100);
    }
`;

function Navigation() {
    return (
        <StyledNav>
            {
                links.map(link => {
                    const { id, href, name, icon } = link;
                    return <Link key={id} to={`/${href}`}>
                        {icon}
                        {name}
                    </Link>;

                })
            }
        </StyledNav>
    );
}

export { Navigation };
