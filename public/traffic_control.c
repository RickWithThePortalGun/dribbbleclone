#include <8051.h>

void FRONT() {
    P1 = 0x54;
    P0 = 0x02;
}

void RIGHT() {
    P1 = 0xA1;
    P0 = 0x02;
}

void BACK() {
    P1 = 0x09;
    P0 = 0x05;
}

void LEFT() {
    P1 = 0x4A;
    P0 = 0x08;
}

void DELAY() {
    unsigned char R4 = 5;
    unsigned char R5;
    while (R4 > 0) {
        R5 = 0xFF;
        while (R5 > 0) {
            R5--;
        }
        R4--;
    }
}

void main() {
    P2 = 0x00;
    P3 = 0x00;
    FRONT();
    unsigned char* DPTR = 0x300;
    ACC = 0;

    unsigned char R0 = 35;
    unsigned char R6 = 30;
    unsigned char R7 = 40;

X1:
    ACC = 0x40;
    unsigned char B = 10;
    ACC /= B;
    unsigned char R41 = ACC;
    unsigned char R42 = B;

A1:
    P3_0 = 1;
    P3_1 = 0;
    ACC = TBL[R41];
    P2 = ACC;
    DELAY();
    P3 = 0x00;
    P3_1 = 1;
    P3_0 = 0;
    ACC = TBL[R42];
    P2 = ACC;
    DELAY();
    P3 = 0x00;
    goto X3;

X2:
    goto X1;

X3:
    ACC = 0x43;
    B = 10;
    ACC /= B;
    unsigned char R44 = ACC;
    unsigned char R45 = B;
    P3_2 = 1;
    P3_3 = 0;
    ACC = TBL[R44];
    P2 = ACC;
    DELAY();
    P3 = 0x00;
    P3_3 = 1;
    P3_2 = 0;
    ACC = TBL[R45];
    P2 = ACC;
    DELAY();
    P3 = 0x00;

    ACC = 0x46;
    B = 10;
    ACC /= B;
    unsigned char R47 = ACC;
    unsigned char R48 = B;
    P3_4 = 1;
    P3_5 = 0;
    ACC = TBL[R47];
    P2 = ACC;
    DELAY();
    P3 = 0x00;
    P3_5 = 1;
    P3_4 = 0;
    ACC = TBL[R48];
    P2 = ACC;
    DELAY();
    P3 = 0x00;

    ACC = 0x49;
    B = 10;
    ACC /= B;
    unsigned char R50 = ACC;
    unsigned char R51 = B;
    P3_6 = 1;
    P3_7 = 0;
    ACC = TBL[R50];
    P2 = ACC;
    DELAY();
    P3 = 0x00;
    P3_7 = 1;
    P3_6 = 0;
    ACC = TBL[R51];
    P2 = ACC;
    DELAY();
    P3 = 0x00;

    DJNZ R0, X2;
    R0 = 35;

    DJNZ 0x40, Q1;
    0x40 = 0x20;

Q1:
    DJNZ 0x43, Q2;
    0x43 = 0x10;
    RIGHT();

Q2:
    DJNZ 0x46, Q3;
    0x43 = 0x20;
    0x46 = 0x10;

Q3:
    DJNZ 0x49, Q4;
    0x49 = 0x10;
    BACK();

Q4:
    DJNZ R6, X4;
    LEFT();
    0x40 = 0x10;
    0x43 = 0x10;
    0x46 = 0x30;

X4:
    DJNZ R7, L1;
    LJMP MAIN;

L1:
    LJMP X1;
}

unsigned char TBL[] = {0xC0, 0xF9, 0xA4, 0xB0, 0x99, 0x92, 0x82, 0xF8, 0x80, 0x90};
