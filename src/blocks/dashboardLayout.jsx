import {
  Menu,
  Package2,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CardLayout } from "@/components/CardLayout";

export function DashboardLayout(props) {
  const url = props.url;
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky z-10 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8 md:w-full">
          <a
            href="/event/dashboard"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <div className="logo flex gap-2 items-center">
              <Package2 className="h-6 w-6" />
              <h1>Sponsorify</h1>
            </div>

            <span className="sr-only">Sponsorify</span>
          </a>
          <a
            href="/event/dashboard"
            className={`transition-colors hover:text-foreground ${'dashboard' === url ? "border-b-2 border-black dark:border-white" : "text-muted-foreground"}`}
          >
            Dashboard
          </a>
          <a
            href="/event/sponsor"
            className={`transition-colors hover:text-foreground ${'sponsor' === url ? "border-b-2 border-black dark:border-white" : "text-muted-foreground"}`}

          >
            Sponsors
          </a>
          <a
            href="/event/myevent"
            className={`transition-colors hover:text-foreground ${url === 'myevent' ? "border-b-2 border-black dark:border-white" : "text-muted-foreground"}`}
          >
            My Events
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="/event/dashboard"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <div className="logo flex gap-2 items-center">
                  <Package2 className="h-6 w-6" />
                  <span className="">Sponsorify</span>
                </div>
              </a>
              <a
                href="/event/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </a>
              <a
                href="/event/sponsor"
                className="text-muted-foreground hover:text-foreground"
              >
                Sponsors
              </a>
              <a
                href="/event/myevent"
                className="text-muted-foreground hover:text-foreground"
              >
                My Events
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search sponsor...."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          {props.userButton}
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <CardLayout>
          {props.main}
        </CardLayout>
      </main>
    </div>
  )
}
