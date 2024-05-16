

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className=" text-center lg:w-3/12 mx-auto">
            <h1 className="text-yellow-500">{subHeading}</h1>
            <h1 className="text-3xl font-semibold pb-2 my-4 border-y-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;