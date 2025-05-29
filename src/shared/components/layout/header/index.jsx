'use client';
import { useState } from 'react';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Header = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToCourses = () => {
        if (window.location.pathname === '/') {
            const element = document.getElementById('courses-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push('/#courses-section');
        }
    };

    const menuItems = [
        { label: '$10,000 Confirmed', action: () => router.push('/') },
        { label: 'Global Recognition', action: scrollToCourses },
        { label: 'BootCamp Curriculum', action: () => router.push('/contact') },
        { label: 'Course Details', action: () => router.push('/contact') },
        { label: 'About Us', action: () => router.push('/contact') },
        { label: 'Contact Us', action: () => router.push('/contact') },
    ];

    return (
        <>
            <header>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        backgroundColor: 'transparent',
                        zIndex: 1000,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: {xs:"10px" ,sm:'20px 90px 0 90px'},
                        }}
                    >
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <a href="/home">
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: { xs: 50, sm: 70 },
                                        height: { xs: 50, sm: 70 },
                                    }}
                                >
                                    <Image
                                        src="/assets/headericon2.svg"
                                        alt="Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                            </a>
                        </Box>

                        {/* Desktop Menu */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 3,
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={item.action}
                                    sx={{ color: '#000', textTransform: 'none', fontWeight:"semibold" }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton onClick={() => setMobileMenuOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Mobile Menu Drawer */}
                <Drawer
                    anchor="right"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                >
                    <Box
                        sx={{
                            width: 250,
                            padding: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 2,
                            }}
                        >
                            <a href="/home">
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: 50,
                                        height: 50,
                                    }}
                                >
                                    <Image
                                        src="/assets/headericon2.svg"
                                        alt="Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                            </a>
                            <IconButton onClick={() => setMobileMenuOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem
                                    button
                                    key={index}
                                    onClick={() => {
                                        item.action();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </header>
        </>
    );
};
