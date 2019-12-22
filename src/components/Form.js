import React from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Confirmation from './Confirmation/Confirmation';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  direction: 'rtl', 
});
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    width: '150px',
    height: '60px',
    boxShadow: '0 0 50px rgba(29, 86, 158, 0.2)',
    backgroundColor: '#f3f4f5',
  },
  nextButton: {
    width: '150px',
    height: '60px',
    boxShadow: '0 0 50px rgba(29, 86, 158, 0.2)',
    border: '2px solid #0072ff',
    backgroundColor: '#0072ff;',

  },
  nextButtonText: {
    /* Style for "המשך" */
    width: '61px',
    height: '20px',
    color: '#ffffff',
    fontFamily: 'Assistant',
    fontSize: '26px',
    fontWeight: '700',
    lineHeight: '25.6px',
  },
  prevButtonText: {
    /* Style for "חזרה" */
    width: '51px',
    height: '15px',
    color: '#7d8895',
    fontFamily: 'Assistant',
    fontSize: '26px',
    fontWeight: '700',
    lineHeight: '25.6px',
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperBackground: {
    backgroundColor: '#f7f8fa',
    width: '500px',
    'margin-left':'auto',
    'margin-right': 'auto',
  }
}));
function getSteps() {
  return ['פרטי המבקש', 'פרטי הטובין', 'אישור וסיום'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return '';
    case 2:
      return <Confirmation />
    default:
      return 'Unknown stepIndex';
  }
}
function ColorlibStepIcon(props) {
  const classes = useStyles();
  const { active, completed } = props;

  const icons = {
    1: '/images/personal_info.png',
    2: '/images/goods.png',
    3: '/images/confirm.png',
  };

  var custom_style = {}
  switch (props.completed) {
    case true:
      custom_style = {width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #0072ff', backgroundColor: '#ffffff'};
      break;
    default:
      custom_style = {width: '60px', height: '60px', borderRadius: '50%',backgroundColor: '#8591b6'}
  }

  switch (props.active) {
    case true:
      custom_style = {width: '60px', height: '60px', borderRadius: '50%',backgroundImage: 'linear-gradient(45deg, #0793d2 0%, #0268c1 100%)'};
      break;
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}

    >
      <img src={icons[(props.icon)]} style={custom_style}/>
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};
export default function Form() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root+" title"} dir="rtl">
      טופס איכות הסביבה
      <Stepper activeStep={activeStep} alternativeLabel classes={{root: classes.stepperBackground}}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                <div className={classes.prevButtonText}>חזרה</div>
              </Button>
              <Button variant="contained" className={classes.nextButton} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 
                <div className={classes.nextButtonText}>המשך</div>
                }
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}