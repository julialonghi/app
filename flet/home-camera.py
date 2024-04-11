import flet
from flet import AppBar, ElevatedButton, Page, Text, View, colors


def main(page: Page):
    page.title = "Life Edge Technologies"

    def route_change(e):
        page.views.clear()
        page.views.append(
            View(
                "/",
                [
                    AppBar(title=Text("Life Edge Technologies"), bgcolor=colors.SURFACE_VARIANT),
                    ElevatedButton("Câmera", on_click=lambda _: page.go("/camera")),
                    ElevatedButton("Lista", on_click=lambda _: page.go("/lista")),
                ],
            )
        )
        if page.route == "/camera":
            page.views.append(
                View(
                    "/camera",
                    [
                        AppBar(title=Text("Câmera"), bgcolor=colors.SURFACE_VARIANT),
                        ElevatedButton("Início", on_click=lambda _: view_pop()),
                    ],
                )
            )
        if page.route == "/lista":
            page.views.append(
                View(
                    "/lista",
                    [
                        AppBar(title=Text("Lista"), bgcolor=colors.SURFACE_VARIANT),
                        ElevatedButton("Início", on_click=lambda _: view_pop()),
                    ],
                )
            )
        page.update()

    def view_pop():
        page.views.pop()
        top_view = page.views[-1]
        page.go(top_view.route)

    page.on_route_change = route_change

    page.go(page.route)


flet.app(main)