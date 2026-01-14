import Link from "next/link";
import Image from "next/image";

interface LogoNavigationParams {
    to: string,
    height: number,
    width: number,
}

export const LogoNavigation = (params: LogoNavigationParams) => {
    return (
        <>
            <Link href={params.to}>
                <Image src="/" height={params.height} width={params.width} alt="Bridge-Logo" />
            </Link>
        </>
    )
}