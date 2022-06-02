import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateNestedOneWithoutFlashCardsInput } from "../inputs/FlashCardStackCreateNestedOneWithoutFlashCardsInput";

@TypeGraphQL.InputType("FlashCardCreateInput", {
  isAbstract: true
})
export class FlashCardCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateNestedOneWithoutFlashCardsInput, {
    nullable: true
  })
  FK_FlashCardStack?: FlashCardStackCreateNestedOneWithoutFlashCardsInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Front?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Back?: string | undefined;
}
