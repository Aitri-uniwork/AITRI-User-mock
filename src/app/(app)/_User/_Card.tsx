import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const styles = {
    card: {
        width: '100%',
        height: '100%',
        maxHeight: '300px',
    },
    title: {
        whiteSpace: 'nowrap', // テキストを1行に制限
        overflow: 'hidden',   // はみ出しを隠す
        textOverflow: 'ellipsis', // ...で省略
    },
    description: {
        display: '-webkit-box', // Flexboxでの行表示
        WebkitBoxOrient: 'vertical', // 縦方向に配置
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2, // 2行まで表示して、省略
    },
}

const ActionCard = ({
    image,
    title,
    description,
}: {
    image: string;
    title: string;
    description: string;
}) => {
  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={styles.title}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={styles.description}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionCard;