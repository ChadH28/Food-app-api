
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food')
        .insert([
          {
            food_id: 1,
            food_title: 'Steak or chicken stir-fry',
            food_description: 'chicken with chips sprinkled with vinegar',
            food_price: 45,
            food_image: 'data:image/png;base64,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OVrl52vPuO7hTxGjcrp+ZcmAP/8Jf74b8zHxw7VnnNLh+2vPOObEv96N+d8SKVhUrjc9Y5+t8stNz9hli8rl2jOuXbbKT9eecTfmr2M+EH689oxzusqP155xSofvrz3j+Dl8oKi86RmHdGP+pq59tqhcburaZRvz83VyYM2Lv9yJ+YhjfrxODszpKj9cJwemLltUDtfJgTFd5W8mB/ocY/7y8edp4dM9fLzKrzeF7bLhbxJmTYe/SZh/dtly/gb/9y5bVA7dp1/xhk2fD385gg835tcu8bBJjZ8z46fuwJh/TYgPV/mhSxyVfebK913enH8kKcNVfnk+fJCofCQpw435sUsclWPmMd9nxneZx3yXuPJLlzgq58yVn1OO+cuBpIxW+QG+Eb5LnPNrlzgqj+JDVH7Oib883s1HG/NT5mEzZMb3T4QPNVf5YFLGqvzSJY7KJXPlH0zKWDk/Zq58anzfJe4qu8xjvksclUuXeMynxs+Zx/z8nMPmVeWfc8xfni5t4FulzV8j50Xlk/Y2F72NYeMilWuu0rBJE5V6G2njA7jPsM8XlS5Sxrzexgdwvc1fu6v0AVzOP1tU6m3MVRo28NF7G12lD+B6G8PGRcpc5f8Zf+wVZ2NjTvwZHv5X419VXlSqPDy8qIQXlfDwohJeVMLDi0rDJhy+b49/r8K/ZsY3rvzb4R/vmlZ+rfr1awD8qep9a4zvjv/uAPiqV2r8G/zhsIPPiX9vh+/hG+GHavwZvhH+0g4/ZsZP1fgP+EOvudb+khl/aohfMuOre+LXzPi3hviP1Pi+YV9WjR8atjbV+LFhd1CNnxpeYKvxc8MLbDV+aRjz1fiPhklZj+/bJWU9fmgXNvX4qV3Y1OOXZj3lF+A/2v29fgF+aNUcfAV+bnWJ+gr8R6ug/BL8t6P2v320x7d7wcPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwz8X/n+WXGil7JVbGAAAAABJRU5ErkJggg==',
            food_ingredients: 'chicken, nuts, sauce',
            date_placement: 'Monday'
          },
          {
            food_id: 2,
            food_title: 'Spaghetti Bolognaise',
            food_description: 'spaghetti with some fine ass mince and tomato paste',
            food_price: 45,
            food_image: 'data:image/png;base64,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OVrl52vPuO7hTxGjcrp+ZcmAP/8Jf74b8zHxw7VnnNLh+2vPOObEv96N+d8SKVhUrjc9Y5+t8stNz9hli8rl2jOuXbbKT9eecTfmr2M+EH689oxzusqP155xSofvrz3j+Dl8oKi86RmHdGP+pq59tqhcburaZRvz83VyYM2Lv9yJ+YhjfrxODszpKj9cJwemLltUDtfJgTFd5W8mB/ocY/7y8edp4dM9fLzKrzeF7bLhbxJmTYe/SZh/dtly/gb/9y5bVA7dp1/xhk2fD385gg835tcu8bBJjZ8z46fuwJh/TYgPV/mhSxyVfebK913enH8kKcNVfnk+fJCofCQpw435sUsclWPmMd9nxneZx3yXuPJLlzgq58yVn1OO+cuBpIxW+QG+Eb5LnPNrlzgqj+JDVH7Oib883s1HG/NT5mEzZMb3T4QPNVf5YFLGqvzSJY7KJXPlH0zKWDk/Zq58anzfJe4qu8xjvksclUuXeMynxs+Zx/z8nMPmVeWfc8xfni5t4FulzV8j50Xlk/Y2F72NYeMilWuu0rBJE5V6G2njA7jPsM8XlS5Sxrzexgdwvc1fu6v0AVzOP1tU6m3MVRo28NF7G12lD+B6G8PGRcpc5f8Zf+wVZ2NjTvwZHv5X419VXlSqPDy8qIQXlfDwohJeVMLDi0rDJhy+b49/r8K/ZsY3rvzb4R/vmlZ+rfr1awD8qep9a4zvjv/uAPiqV2r8G/zhsIPPiX9vh+/hG+GHavwZvhH+0g4/ZsZP1fgP+EOvudb+khl/aohfMuOre+LXzPi3hviP1Pi+YV9WjR8atjbV+LFhd1CNnxpeYKvxc8MLbDV+aRjz1fiPhklZj+/bJWU9fmgXNvX4qV3Y1OOXZj3lF+A/2v29fgF+aNUcfAV+bnWJ+gr8R6ug/BL8t6P2v320x7d7wcPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwz8X/n+WXGil7JVbGAAAAABJRU5ErkJggg==',
            food_ingredients: 'spaghtti, mince, tomatoes',
            date_placement: 'Tuesday'
          },
          {
            food_id: 3,
            food_title: 'Chicken Schintzel',
            food_description: 'Chicken Schintzel with mushroom sauce with an option of spicy rice or wedges',
            food_price: 50,
            food_image: 'data:image/png;base64,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OVrl52vPuO7hTxGjcrp+ZcmAP/8Jf74b8zHxw7VnnNLh+2vPOObEv96N+d8SKVhUrjc9Y5+t8stNz9hli8rl2jOuXbbKT9eecTfmr2M+EH689oxzusqP155xSofvrz3j+Dl8oKi86RmHdGP+pq59tqhcburaZRvz83VyYM2Lv9yJ+YhjfrxODszpKj9cJwemLltUDtfJgTFd5W8mB/ocY/7y8edp4dM9fLzKrzeF7bLhbxJmTYe/SZh/dtly/gb/9y5bVA7dp1/xhk2fD385gg835tcu8bBJjZ8z46fuwJh/TYgPV/mhSxyVfebK913enH8kKcNVfnk+fJCofCQpw435sUsclWPmMd9nxneZx3yXuPJLlzgq58yVn1OO+cuBpIxW+QG+Eb5LnPNrlzgqj+JDVH7Oib883s1HG/NT5mEzZMb3T4QPNVf5YFLGqvzSJY7KJXPlH0zKWDk/Zq58anzfJe4qu8xjvksclUuXeMynxs+Zx/z8nMPmVeWfc8xfni5t4FulzV8j50Xlk/Y2F72NYeMilWuu0rBJE5V6G2njA7jPsM8XlS5Sxrzexgdwvc1fu6v0AVzOP1tU6m3MVRo28NF7G12lD+B6G8PGRcpc5f8Zf+wVZ2NjTvwZHv5X419VXlSqPDy8qIQXlfDwohJeVMLDi0rDJhy+b49/r8K/ZsY3rvzb4R/vmlZ+rfr1awD8qep9a4zvjv/uAPiqV2r8G/zhsIPPiX9vh+/hG+GHavwZvhH+0g4/ZsZP1fgP+EOvudb+khl/aohfMuOre+LXzPi3hviP1Pi+YV9WjR8atjbV+LFhd1CNnxpeYKvxc8MLbDV+aRjz1fiPhklZj+/bJWU9fmgXNvX4qV3Y1OOXZj3lF+A/2v29fgF+aNUcfAV+bnWJ+gr8R6ug/BL8t6P2v320x7d7wcPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwz8X/n+WXGil7JVbGAAAAABJRU5ErkJggg==',
            food_ingredients: 'chicken, mushroom sauce, rice',
            date_placement: 'Wednesday'
          },
          {
            food_id: 4,
            food_title: 'Lemon and rosemary grilled chicken and salads',
            food_description: 'Grilled chicken covered in lemon and rosemary spices with fresh salads',
            food_price: 45,
            food_image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAXcAQMAAAAC+94nAAAABlBMVEW6vsHp7vHTREENAAALFElEQVR42u3dMXLjyBUGYKhYLoU6gq7hjKfwbVxF3MD38ClwEyN0iBABBnKwO0PuLBoU0fL0e8uPoTQqffPY+vHY6EZ3H3lfUwcPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw//y/H/7Y6+2uPXw/burTl+Oo7vmuP7Cvy5Mb5i1HTda2P8XIM/NcaPNfiuMX6owp/b4qvs3XtT/FqHf22KX+rwp6b4uQ7/0hQ/1eG7pvixEn9piR8q8eeW+L5rmJW1+Ep7XVdciV+fGv/aEL/U4k8N8XMt/qUhfnpqfNcQPz43/tIOPzw3/twO3z83/h2+SVNZ15nB58SvT45/hT+MP9zVzm3xS9WHoSVA5d+qfrpx5Y/nRe2H2C/AH7/A9+0rf67Cn7LiB3h4+Fz4V5U/jL8Y8/DwolLl5bzKw8OLSmkDDw8vKuE/mfPf/pG38mv/ICUSfnp0DEXCP3yjIxB+eXjNWKConB5e/BMobYaH1xIEGjaPr6+Ng18fX6IaBz8/vtYwDn56fLleHPzw+OqfOFHZP76AJk7lDyznD5Pz64EV8WEqvxxYVB4GPx9Ylx0GPx1Y2hwGPx5YHRwmKocDyzzDVL4/sFIyTFQe2bcVpvKZ8euRfVtR8MuRrU/p8RGicj6y9SlK5acju4eiRGVW/PmP3cED/QH8F+CHI3tY0uMjRGV/ZA9LlMpnxV/SV/7Qswzgnxy/HnoQQ5CoPI4/wVdFZerKL4cegQH/S/D/yYz/V9io/AT+NXHl11PYqJzvPvZleUlc+bkLi79f+Wnjq2kqP25M56Sp/LAxI5ImKvuNSYU0ld+qcZCovFv5dYuZpfLLVqecJW3mrS9nwU9bb0gW/Lg1b58lKoetqe8sle+3Zo+zROXmHGbEqY9uM+Y3nBGHzUvhH74knXSaN9+RJPhp88qbZK5y3LxBm2SKe9i8xxnlts4dfL95mzBJ5bdvVuW4G7hu/69y4Jftv+Qc+Hn70hvlDvj+7ftp+yNWjrUH4/ZKnChRub9kZdj+To71Nv32e5JjjVnhTzkFfi1cvqLgd5cmLoWWLUpU7i4KnQvfSrGidSq8KVGicnch9Fj4c0ixBH0opGgKfF+4+KbYdlHq2cLgdza8rKV3JcxunZ2tRkvpjznDJq+5FKNhduvsbK+bSlffDBsbx1LfEwa/s6V0KLXLGTbz9qVPWXHw/Sdi/qfvxtkDPnwi5n8qdIJHB5Tn7uM866P40Ia5eNckweMypuLd8QQPKhmL50cFwpceETMUj2AKhC89nKcvnqUT6MlCa+E2Zvk4mvgPpFrLh2NGegjb9qPAlvL5kqEef7c5gufyEY2h8Ou/N39D8ZTD+A8eHMsHBcbHD+Wz9uI/r7IvH5oWv/I7546Ffy7xunMKcvjKLzsHCYfHzztn8YbHTzvH2YbHjzsnwoaPymHnUNXwle93TscMH5V7B0xGr/y6d9x9dPyyd2J8dPy8d+h6dPy0d2559Kgc947+jl75Ye/07OhR2e8dgxy98rsnCQfHbx6afEqCX7bwL0nw8+YJ1EmictrEX3JUftzEn3NE5bCJf89R+X73vPvg+P0j42Pj1238KQV+2ca/pIjK7Zj/EfSxKz8V8JcMUTmGx58fjfkfQR8b3xfwb1Hx3+7G/I+IiYdf7sb8D3G8qJwu92L+R9DHq/x4vhvz34M+XlSO73dj/vvPxKt8/3Y35m/XH8fC/zQLvBf0AfGnuzH/PejD4ZebWeCi/fd3J1xUztfJgbWMP8Ws/HyNn6WMf4kZleP1f1OO+d/fnXCVH66TA9MO/hIV/3Y35m820YbC/zQ5sBv00fDrjaffwb9FjMr1ZnJgx/6bOVrl52vPuO7hTxGjcrp+ZcmAP/8Jf74b8zHxw7VnnNLh+2vPOObEv96N+d8SKVhUrjc9Y5+t8stNz9hli8rl2jOuXbbKT9eecTfmr2M+EH689oxzusqP155xSofvrz3j+Dl8oKi86RmHdGP+pq59tqhcburaZRvz83VyYM2Lv9yJ+YhjfrxODszpKj9cJwemLltUDtfJgTFd5W8mB/ocY/7y8edp4dM9fLzKrzeF7bLhbxJmTYe/SZh/dtly/gb/9y5bVA7dp1/xhk2fD385gg835tcu8bBJjZ8z46fuwJh/TYgPV/mhSxyVfebK913enH8kKcNVfnk+fJCofCQpw435sUsclWPmMd9nxneZx3yXuPJLlzgq58yVn1OO+cuBpIxW+QG+Eb5LnPNrlzgqj+JDVH7Oib883s1HG/NT5mEzZMb3T4QPNVf5YFLGqvzSJY7KJXPlH0zKWDk/Zq58anzfJe4qu8xjvksclUuXeMynxs+Zx/z8nMPmVeWfc8xfni5t4FulzV8j50Xlk/Y2F72NYeMilWuu0rBJE5V6G2njA7jPsM8XlS5Sxrzexgdwvc1fu6v0AVzOP1tU6m3MVRo28NF7G12lD+B6G8PGRcpc5f8Zf+wVZ2NjTvwZHv5X419VXlSqPDy8qIQXlfDwohJeVMLDi0rDJhy+b49/r8K/ZsY3rvzb4R/vmlZ+rfr1awD8qep9a4zvjv/uAPiqV2r8G/zhsIPPiX9vh+/hG+GHavwZvhH+0g4/ZsZP1fgP+EOvudb+khl/aohfMuOre+LXzPi3hviP1Pi+YV9WjR8atjbV+LFhd1CNnxpeYKvxc8MLbDV+aRjz1fiPhklZj+/bJWU9fmgXNvX4qV3Y1OOXZj3lF+A/2v29fgF+aNUcfAV+bnWJ+gr8R6ug/BL8t6P2v320x7d7wcPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwz8X/n+WXGil7JVbGAAAAABJRU5ErkJggg==',
            food_ingredients: 'chicken, spices, salads',
            date_placement: 'Thursday'
          },
          {
            food_id: 5,
            food_title: 'Masala steak sandwiches',
            food_description: 'Finest masala steak with a golden toasted sandwich',
            food_price: 45,
            food_image: 'data:image/png;base64,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OVrl52vPuO7hTxGjcrp+ZcmAP/8Jf74b8zHxw7VnnNLh+2vPOObEv96N+d8SKVhUrjc9Y5+t8stNz9hli8rl2jOuXbbKT9eecTfmr2M+EH689oxzusqP155xSofvrz3j+Dl8oKi86RmHdGP+pq59tqhcburaZRvz83VyYM2Lv9yJ+YhjfrxODszpKj9cJwemLltUDtfJgTFd5W8mB/ocY/7y8edp4dM9fLzKrzeF7bLhbxJmTYe/SZh/dtly/gb/9y5bVA7dp1/xhk2fD385gg835tcu8bBJjZ8z46fuwJh/TYgPV/mhSxyVfebK913enH8kKcNVfnk+fJCofCQpw435sUsclWPmMd9nxneZx3yXuPJLlzgq58yVn1OO+cuBpIxW+QG+Eb5LnPNrlzgqj+JDVH7Oib883s1HG/NT5mEzZMb3T4QPNVf5YFLGqvzSJY7KJXPlH0zKWDk/Zq58anzfJe4qu8xjvksclUuXeMynxs+Zx/z8nMPmVeWfc8xfni5t4FulzV8j50Xlk/Y2F72NYeMilWuu0rBJE5V6G2njA7jPsM8XlS5Sxrzexgdwvc1fu6v0AVzOP1tU6m3MVRo28NF7G12lD+B6G8PGRcpc5f8Zf+wVZ2NjTvwZHv5X419VXlSqPDy8qIQXlfDwohJeVMLDi0rDJhy+b49/r8K/ZsY3rvzb4R/vmlZ+rfr1awD8qep9a4zvjv/uAPiqV2r8G/zhsIPPiX9vh+/hG+GHavwZvhH+0g4/ZsZP1fgP+EOvudb+khl/aohfMuOre+LXzPi3hviP1Pi+YV9WjR8atjbV+LFhd1CNnxpeYKvxc8MLbDV+aRjz1fiPhklZj+/bJWU9fmgXNvX4qV3Y1OOXZj3lF+A/2v29fgF+aNUcfAV+bnWJ+gr8R6ug/BL8t6P2v320x7d7wcPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwz8X/n+WXGil7JVbGAAAAABJRU5ErkJggg==',
            food_ingredients: 'steak, masala, chips',
            date_placement: 'Friday'
          },
        ]);
    });
};


// food id
// date_added
// food description
// food_price
// food_image
// food_quantity
// ingredients
// options: date the food is on 