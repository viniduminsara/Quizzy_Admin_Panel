const DashboardCard = ({ bgColor, value, title }) => {

    return (
        <div className={`${bgColor} p-6 rounded-2xl`}>
            <h3 className='text-4xl poppins-semibold md:mb-2'>{value}</h3>
            <h5 className='text-lg poppins-regular'>{title}</h5>
        </div>
    )
}

export default DashboardCard;
