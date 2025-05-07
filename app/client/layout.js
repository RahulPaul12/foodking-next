import HeaderLayout from "@/layouts/HeaderLayout";

export default function ClientLayout({children}){
    return (
        <>
            <HeaderLayout />
            {children}
        </>
    );
}