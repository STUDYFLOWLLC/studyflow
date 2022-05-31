import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateNestedOneWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackCreateNestedOneWithoutFK_FlashcardsInput";

@TypeGraphQL.InputType("FlashCardCreateInput", {
  isAbstract: true
})
export class FlashCardCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateNestedOneWithoutFK_FlashcardsInput, {
    nullable: true
  })
  FK_FlashCardStack?: FlashCardStackCreateNestedOneWithoutFK_FlashcardsInput | undefined;

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
