import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

// WE ARE EXERCISEDB API AVAILABLE ON RAPIDAPI 

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    {/* THIS GIVES THE IMAGES TO THE PAGINATION */}
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      {/* THIS SHOWS THE MUSCLE INVOLVED */}
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      {/* THIS SHOWS THE TARGETED MUSCLE  */}
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    {/* THIS GIVES THE EXERCISE NAME LIKE DEADLIFT ,BENCH PRESS */}
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
