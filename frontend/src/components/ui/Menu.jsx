
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react';
  import { IoMdMenu } from "react-icons/io";
  
  const CustomMenu = () => {
    return (
      <Menu>
        <MenuButton as={Button} variant="outline" size="sm">
        <IoMdMenu />
        </MenuButton>
        <MenuList>
          <MenuItem>Search</MenuItem>
          <MenuItem> ZA Collection</MenuItem>
          <MenuItem>Top rated Cars</MenuItem>
          <MenuItem>Wishlist </MenuItem>
          <MenuItem> Contact Us </MenuItem>
        </MenuList>
      </Menu>
    );
  };
  
  export default CustomMenu;
