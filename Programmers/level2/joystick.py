def solution(name):
    answer = 0
    locaiton = 0
    wrongPos = []
    
    for i in range(len(name)):
        if name[i] == 'A':
            pass
        else: 
            wrongPos.append(i)
    
    if len(wrongPos) > 0:
        for j in range(len(wrongPos)):
            location = wrongPos[j]
            answer += calculateLessAdd(ord('A'), ord(name[wrongPos[j]]), ord('Z'))
            
            if(j < len(wrongPos) - 1):
                answer += calculateLessMove(j, wrongPos[j+1], len(name) - 1)
            
    
    return answer

def calculateLessAdd(curVal, nextVal, lastVal):
    front = nextVal - curVal
    back = lastVal - nextVal + 1
    
    return front if front < back else back


def calculateLessMove(curLoc, nextLoc, lastLoc):
    front = nextLoc - curLoc
    back = curLoc + (lastLoc - nextLoc) + 1
    
    return front if front < back else back