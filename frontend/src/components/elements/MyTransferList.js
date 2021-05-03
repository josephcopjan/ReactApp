import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  paper: {
    width: 200,
    height: 330,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  div: {
      display: 'inline-block',
    },
}));

function not(a, b) {
/*
  return a.filter(
    (value) =>
    b.indexOf(value) === -1
  );*/
  return a.filter(({ id: id1 }) => !b.some(({ id: id2 }) => id2 === id1));
/*
    let newArray = [];
    return newArray = a
             .filter(function(element) {
                return b.filter(n2 => n2.id === element.id)

             });*/

  //return a.filter(n => !b.some(n2 => n.id == n2.file));
  //a.filter(n => !b.some(n2 => n2.indexOf(n.id) === -1));
}

function intersection(a, b) {
/*
  return a.filter(
    (value) =>
    b.indexOf(value) !== -1
    );*/
  return a.filter(n => b.some(n2 => n.id == n2.id));
}

function union(a, b) {
    let aaa = [...a, ...not(b, a)];
  return aaa;
}

        function handleSelect(items, setAge)  {
            setAge(items);
            console.log("dsds" + items);
        };

export default function MyTransferList(inputProps) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [checked, setChecked] = React.useState([]);
  const { options, myField, myFields, onNameChange, subjects, mySubjects, changeSubjects } = inputProps;
  const [left, setLeft] = React.useState(mySubjects);
  const [right, setRight] = React.useState(subjects);
    onNameChange("Testus");
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
    changeSubjects(left, right);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    changeSubjects(left, right);
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
    changeSubjects(left, right);
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
    changeSubjects(left, right);
  };

    const input = [{value:"John", code:"Doe", id:1, name:"blue"}];


    const renderOptions = (options) => {
         return options.map((dt, i) => {

           return (
               <MenuItem
                 label="Select a country"
                 value={dt.id || ''}

                key={i} name={dt.name}>{dt.name}</MenuItem>

           );
         });
        };
    const numberOfChecked = (items) => intersection(checked, items).length;

      const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
          setChecked(not(checked, items));
        } else {
          setChecked(union(checked, items));
        }
      };
      /*
    const handleSelect = (items, test) => () => {
        console.log("dsds" + items);
    };*/

  const customList = (items, input) => (



    <Paper className={classes.paper}>
        <CardHeader
            className={classes.cardHeader}
            avatar={
                <div className={classes.div}>
                    <FormControlLabel
                        value="start"
                        control={<Checkbox
                            disabled={items.length === 0}
                            inputProps={{ 'aria-label': 'all items selected' }}
                            onClick={handleToggleAll(items)}
                            checked={numberOfChecked(items) === items.length && items.length !== 0}
                            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                            disabled={items.length === 0}

                      />}
                      label="Check all"
                      labelPlacement="start"
                    />
                </div>
            }
      />
      <CardHeader
              className={classes.cardHeader}
              avatar={

                      <div>
                        <FormControlLabel

                                value="start"
                                control={<Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    value = {age}
                                    defaultValue = {input[0].value}
                                    variant="outlined"
                                    onChange={event => handleSelect(event.target.value, setAge)}
                                    displayEmpty
                                    fullWidth

                              >
                              <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                              }
                              label="Check all"
                              labelPlacement="start"
                            />
                      </div>

              }


            />

        <Divider />
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value.id} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.name} (${value.year})`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList(left, input)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
           &gt;&gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            &lt;&lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right, input)}</Grid>
    </Grid>
  );
}