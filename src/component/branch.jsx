import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Button, 
  Container,
  CardMedia,
  Box 
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import BranchHead from './heading/branchhead';

// Sample data - In a real application, this would typically come from an API
const branches = [
  {
    id: 1,
    name: "Central Hospital",
    address: "123 Main Street, Cityville",
    phone: "123-456-7890",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2",
    specialties: ["Cardiology", "Neurology", "Pediatrics"],
  },
  {
    id: 2,
    name: "Northside Clinic",
    address: "456 North Ave, Townsville",
    phone: "987-654-3210",
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9",
    specialties: ["Orthopedics", "Dermatology", "Internal Medicine"],
  },
  {
    id: 3,
    name: "Lakeside Medical",
    address: "789 Lake Road, Suburbia",
    phone: "555-555-5555",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    specialties: ["Ophthalmology", "ENT", "Dental Care"],
  },
];

const HospitalBranches = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleContactClick = (branchId) => {
    // Handle contact button click
    console.log(`Contact clicked for branch ${branchId}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!isHomePage && <BranchHead />}

      <Container maxWidth="lg" sx={{ py: 6, mb: 8 }}>
        <Box mb={6}>
          <Typography 
            variant="h3" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#2c3e50' }}
          >
            Our Hospital Branches
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Providing quality healthcare services across multiple locations
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {branches.map((branch) => (
            <Grid item xs={12} sm={6} md={4} key={branch.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 5,
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={branch.image}
                  alt={branch.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {branch.name}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      {branch.address}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      {branch.phone}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    Specialties:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {branch.specialties.map((specialty, index) => (
                      <Typography 
                        key={index} 
                        variant="body2" 
                        color="text.secondary"
                        component="span"
                        sx={{ 
                          mr: 1,
                          display: 'inline-block',
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          marginBottom: '4px'
                        }}
                      >
                        {specialty}
                      </Typography>
                    ))}
                  </Box>

                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => handleContactClick(branch.id)}
                    sx={{ mt: 'auto', textTransform: 'none', borderRadius: '8px' }}
                  >
                    Contact This Branch
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HospitalBranches;
