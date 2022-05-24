import { makeStyles } from '@mui/styles';

const styles = (theme) => {
    return {
        heroBox: {
            width: '100%',
            display: 'flex',
            minHeight: '600px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            color: '#191645',
        },
        gridContainer: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1300px',
            padding: '80px',

        }
        ,
        largeImage: {
            width: '70%',
            height: 'auto',
            padding: '50px',
        },
        subtitle: {
            opacity: '0.4',
            paddingBottom: '30px',
        },
        title: {
            paddingBottom: '15px',
        },
        sectionGridContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: '500px',
        },
        sectionGridItem: {
            backgroundColor: '#f2f0f1',
            textAlign: 'center',
            padding: '30px',
            width: '200px',
            borderRadius: '10px',
            margin: '10px !important',
            color: '#191645'
        },
        footer: {
            display: 'flex',
            alignItems: 'center',
            miHeight: '10vh',
            padding: '20px',
            justifyContent: 'center',
            backgroundColor: '#f2f0f1',
            spaceBetween: '20px',
        },

        footerImage: {
            width: '5%',
            height: 'auto',
        },
        ListingGrid:{
            display: 'flex',
            flexDirection:"column",
            backgroundColor:"#191645",
            textDecoration:"none",
            listStyleType:"none",
            color:"#FFFFFF",
            borderRadius: "10px",
            spaceBetween: "50px",
        },
        principalBox:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight: '100vh',


        },

        titre:{

            textAlign:"center",
            justifyContent:"center",
        },

}
}

const useStyles = makeStyles(styles);
export default useStyles;