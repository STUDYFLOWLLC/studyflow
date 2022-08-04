import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewCreateManyInput } from "../../../inputs/FlashcardStackReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => [FlashcardStackReviewCreateManyInput], {
    nullable: false
  })
  data!: FlashcardStackReviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
