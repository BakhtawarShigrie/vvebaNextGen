'use client';
import { useEffect, useState, useCallback, useMemo } from 'react';
import {
  Box, Button, Menu, MenuItem, Typography, Paper, useTheme,
  useMediaQuery, Grid, Card, CardMedia, CardContent
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CoursesData as data } from '@/shared/constants/webDevelopemt';
import Link from 'next/link';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const FullScreenDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-container': {
    padding: 0,
    margin: 0,
    alignItems: 'flex-start',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
  },
  '& .MuiDialog-paper': {
    margin: 0,
    width: '100%',
    height: '100%',
    maxWidth: 'none',
    maxHeight: 'none',
    borderRadius: 0,
    transition: theme.transitions.create(['transform', 'opacity'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  '& .MuiDialog-paperWidthSm': {
    maxWidth: 'none',
  },
}));

const CourseSelector = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(data.courses[0]);
  const [selectedNav, setSelectedNav] = useState(data.courses[0].navigation[0].id);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedTool, setSelectedTool] = useState(null);
  const [currentVideo, setCurrentVideo] = useState('');

  const selectedColor = selectedCourse.color;
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleCourseSelect = useCallback((course) => {
    setSelectedCourse(course);
    setSelectedNav(course.navigation[0].id);
    setAnchorEl(null);
  }, []);

  const handleNavSelect = useCallback((navId) => {
    setSelectedNav(navId);
  }, []);

  const handleClickOpen = useCallback((weekIndex) => {
    const weeks = selectedCourse.navigation.find((nav) => nav.id === 'detail')?.content || [];
    setSelectedWeek(weeks[weekIndex]);
    setDialogOpen(true);
  }, [selectedCourse.navigation]);

  const handleVideoDialog = useCallback((videoLink) => {
    setDialogOpen(true);
    setCurrentVideo(videoLink);
  }, []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const buttonStyles = useMemo(() => ({
    justifyContent: 'space-between',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    minWidth: { xs: '100%', sm: '200px' },
    width: 'fit-content',
    maxWidth: { xs: '100%', sm: 'none' },
    borderColor: 'none',
    backgroundColor: '#363f46',
    color: '#fff',
    fontWeight: 'bold',
    paddingRight: '12px',
    position: 'relative',
    '& .MuiButton-endIcon': {
      position: 'absolute',
      right: '8px',
      marginLeft: '0',
    },
  }), []);

  const navButtonStyles = useMemo(() => ({
    textTransform: 'none',
    fontWeight: 600,
    py: 1,
    fontSize: '0.875rem',
    borderRadius: 1,
    whiteSpace: 'nowrap',
  }), []);

  const closeButtonStyles = useMemo(() => ({
    position: 'absolute',
    right: 8,
    top: 8,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    zIndex: 1,
    borderRadius: '50%',
    width: 50,
    height: 50,
    padding: 0,
  }), [theme.palette]);

  const renderContent = useMemo(() => {
    switch (selectedNav) {
      case 'detail':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'detail')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.content}...
                    <span
                      onClick={() => handleClickOpen(index)} // Pass the week index
                      style={{ color: 'purple', cursor: 'pointer' }}
                    >
                      Read More
                    </span>
                  </Typography>
                  <Typography variant="body2" color="blue">
                    <Link href={item.link} target="_blank">
                      {item.link}
                    </Link>
                  </Typography>
                </Box>
              ))}

            <FullScreenDialog
              open={dialogOpen}
              onClose={handleDialogClose}
              aria-labelledby="fullscreen-dialog-title"
              BackdropProps={{
                style: { backgroundColor: 'rgb(255, 255, 255)' },
              }}
            >
              <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.common.white, // White icon for contrast
                  backgroundColor: (theme) => theme.palette.primary.main, // Primary color background
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.primary.dark, // Darker on hover
                  },
                  zIndex: 1,
                  borderRadius: '50%', // Makes it circular
                  width: 50, // Fixed width
                  height: 50, // Fixed height (same as width for perfect circle)
                  padding: 0, // Remove default padding
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                  {selectedWeek?.title}
                </Typography>

                {/* Days content */}
                {selectedWeek?.days?.map((day) => (
                  <Box key={day.day} sx={{ mb: 2 }}>
                    <Typography variant="h6">{day.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {day.content}
                    </Typography>
                  </Box>
                ))}
              </DialogContent>
            </FullScreenDialog>
          </Box>
        );
      case 'earning-potential':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'earning-potential')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.content}
                  </Typography>
                </Box>
              ))}
          </Box>
        );
      case 'profile':
        return (
          <Box>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              An Individual Profile After completing 8 Months
            </Typography>

            {selectedCourse.navigation
              .find((nav) => nav.id === 'profile')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}:</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>

                  {/* Clickable box for video dialog */}
                  <Box
                    onClick={() => handleVideoDialog(item.VideoLink)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: '30px',
                      border: '1px solid black',
                      padding: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    <Image
                      src={item.imageLink}
                      width={200}
                      height={200}
                      alt={item.title}
                    />
                    <Typography sx={{ marginTop: '30px' }} variant="body2" color="blue">
                      Click Here to Watch project detail
                    </Typography>
                  </Box>

                  <Button
                    color="primary"
                    fullWidth
                    sx={{ mt: '30px', backgroundColor: 'primary.main', color: 'white' }}
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      Click Here to Watch Live Demo
                    </Link>
                  </Button>
                </Box>
              ))}

            {/* Video Dialog */}
            <FullScreenDialog
              open={dialogOpen}
              onClose={handleDialogClose}
              maxWidth="md"
              fullWidth
            >
              <DialogContent sx={{ p: 0, position: 'relative', height: '70vh' }}>
                <IconButton
                  aria-label="close"
                  onClick={handleDialogClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.common.white, // White icon for contrast
                    backgroundColor: (theme) => theme.palette.primary.main, // Primary color background
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.primary.dark, // Darker on hover
                    },
                    zIndex: 1,
                    borderRadius: '50%', // Makes it circular
                    width: 50, // Fixed width
                    height: 50, // Fixed height (same as width for perfect circle)
                    padding: 0, // Remove default padding
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  {currentVideo && (
                    <iframe
                      src={currentVideo}
                      width="100%"
                      height="100%"
                      style={{ border: 'none' }}
                      allowFullScreen
                    />
                  )}
                </Box>
              </DialogContent>
            </FullScreenDialog>
          </Box>
        );
      case 'projects':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'profile')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}:</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  {/* Clickable box for video dialog */}
                  <iframe
                    src={item.VideoLink}
                    width="100%"
                    height="350px"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              ))}
            {/* Video Dialog */}
            <FullScreenDialog
              open={dialogOpen}
              onClose={handleDialogClose}
              maxWidth="md"
              fullWidth
            >
              <DialogContent sx={{ p: 0, position: 'relative', height: '70vh' }}>
                <IconButton
                  aria-label="close"
                  onClick={handleDialogClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                    zIndex: 1,
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  {currentVideo && (
                    <iframe
                      src={currentVideo}
                      width="80%"
                      height="80%"
                      style={{ border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </Box>
              </DialogContent>
            </FullScreenDialog>
          </Box>
        );
      case 'team':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'team')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              ))}
          </Box>
        );
      case 'training':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'training')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              ))}
          </Box>
        );
      case 'requirement':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'requirement')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              ))}
          </Box>
        );
      case 'faq':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'faq')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              ))}
          </Box>
        );
      case 'authentication':
        return (
          <Box sx={{ p: 4 }}>
            {selectedCourse.navigation.find((nav) => nav.id === 'authentication')
              ?.content && (
                <>
                  <Grid
                    container
                    sx={{
                      mb: 4,
                      justifyContent: isSmallScreen ? 'center' : 'flex-start',
                      gap: 1,
                    }}
                  >
                    {selectedCourse.navigation
                      .find((nav) => nav.id === 'authentication')
                      ?.content?.map((item, index) => (
                        <Grid item key={index}>
                          <Button
                            // variant={selectedTool?.title === item.title || (index === 0 && !selectedTool) ? 'contained' : 'outlined'}
                            onClick={() => setSelectedTool(item)}
                            sx={{
                              minWidth: 90,
                              textTransform: 'none',
                              whiteSpace: 'nowrap',

                              background:
                                selectedTool?.title === item.title ||
                                  (index === 0 && !selectedTool)
                                  ? selectedColor
                                  : 'transparent',
                              color:
                                selectedTool?.title === item.title ||
                                  (index === 0 && !selectedTool)
                                  ? 'white'
                                  : 'black',
                            }}
                          >
                            {item.title}
                          </Button>
                        </Grid>
                      ))}
                  </Grid>

                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Card sx={{ maxWidth: 1345 }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={
                          selectedTool?.imageLink ||
                          selectedCourse.navigation.find(
                            (nav) => nav.id === 'authentication'
                          )?.content?.[0]?.imageLink
                        }
                        alt={
                          selectedTool?.title ||
                          selectedCourse.navigation.find(
                            (nav) => nav.id === 'authentication'
                          )?.content?.[0]?.title
                        }
                      />
                    </Card>
                  </Box>
                </>
              )}
          </Box>
        );
      case 'agreement':
        return (
          <Box>
            {selectedCourse.navigation
              .find((nav) => nav.id === 'agreement')
              ?.content?.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              ))}
          </Box>
        );
      default:
        return <Typography>{selectedCourse.content}</Typography>;
    }
  }, [
    selectedNav,
    selectedCourse,
    dialogOpen,
    selectedWeek,
    currentVideo,
    selectedTool,
    handleClickOpen,
    handleDialogClose,
    handleVideoDialog,
    closeButtonStyles
  ]);

  return (
    <div className="container-fluid p-4 mb-80 sm:mb-60">
      <div className="tp-home-4-service-title text-center mt-60">
        <span className="tp-section-v_2-title-pre">Latest Insights</span>
        <h3 className="tp-section-title">Course Details</h3>
      </div>
      <Box
  sx={{
    width: '100%',
    bgcolor: 'rgba(54, 63, 70, 0.1)',
    borderRadius: 0,
    padding: '7px 5px',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'flex-start', md: 'center' },
    gap: { md: 6, xs: 1 },
  }}
>
  <Box
    sx={{
      flexShrink: 0,
      mb: { xs: 1, md: 0 },
      display: 'flex',
      justifyContent: { xs: 'flex-start', md: 'center' },
    }}
  >
    <Button
      onClick={handleClick}
      sx={buttonStyles}
    >
      <Box
        component="span"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: 'calc(100% - 32px)',
          display: 'inline-block',
          paddingLeft: "8px"
        }}
      >
        {selectedCourse.title}
      </Box>
      <ArrowDropDownIcon
        sx={{
          width: '24px',
          flexShrink: 0,
        }}
      />
    </Button>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '20ch',
        },
      }}
    >
      {data.courses.map((course) => (
        <MenuItem
          key={course.id}
          onClick={() => handleCourseSelect(course)}
          selected={course.id === selectedCourse.id}
          sx={{ justifyContent: 'center' }}
        >
          {course.title}
        </MenuItem>
      ))}
    </Menu>
  </Box>

  <Box
    sx={{
      display: 'flex',
      width: { xs: '100%', md: 'auto' },
      overflowX: { xs: 'auto', md: 'visible' },
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
      scrollbarWidth: { xs: 'thin', md: 'auto' },
      py: 1,
      '&::-webkit-scrollbar': {
        height: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '2px',
      },
      '& > button': {
        flexShrink: 0,
        px: 2,
        mx: 0.5,
        minWidth: 'max-content',
      },
    }}
  >
    {selectedCourse.navigation.map((nav) => (
      <Button
        key={nav.id}
        onClick={() => handleNavSelect(nav.id)}
        sx={{
          ...navButtonStyles,
          color: selectedNav === nav.id ? 'primary.contrastText' : 'black',
          background: selectedNav === nav.id ? selectedColor : 'transparent',
          borderColor: selectedNav === nav.id ? 'primary.dark' : 'transparent',
        }}
      >
        {nav.title}
      </Button>
    ))}
  </Box>
</Box>

      <Paper
        elevation={3}
        sx={{ p: 3, height: 400, mt: 0, overflow: 'auto', scrollbarWidth: 'thin' }}
      >
        {renderContent}
      </Paper>
    </div>
  );
};

export default CourseSelector;
