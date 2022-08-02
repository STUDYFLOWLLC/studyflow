import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateNestedManyWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewCreateNestedManyWithoutFK_FlashcardInput";

@TypeGraphQL.InputType("FlashcardCreateWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardCreateWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

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
  FrontImageUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Back?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BackImageUrl?: string | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateNestedManyWithoutFK_FlashcardInput, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewCreateNestedManyWithoutFK_FlashcardInput | undefined;
}
