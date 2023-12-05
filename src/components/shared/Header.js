import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import headerImage from '@/assets/The Dragon News.png'
import Image from 'next/image';
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <div>
            <Box className="w-full text-center my-3">
                <Container>
                    <Image src={headerImage} width={300} height={100} alt='header image' className='mx-auto' ></Image>
                    <Typography color="gray" variant="body2" textAlign="center">@2023 The Dragon News. Design by Programming Hero</Typography>
                    <Typography> {currentDate} </Typography>
                </Container>
            </Box>
        </div>
    );
};

export default Header;