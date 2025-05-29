[10, 5, -5, -4, -6, -11, 5]  st[-11,5 ]  cur ast: 5
def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        st = []#left asteroids st[<--a, <--b]. right asteroids[c-->, d-->, <--e ....]
        for ast in asteroids:
            while st and st[-1] > 0:
                if ast > 0:#current asteroid also moving right. x>0 no collision
                    st.append(ast)
                    break 
                else:#current asteroid move left, x<0
                    if st[-1] < -ast:
                        st.pop()                       
                    elif st[-1] == -ast:
                        st.pop()
                        break 
                    else:
                        break 
            else:
                st.append(ast)
        return st 