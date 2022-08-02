import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewCreateManyInput } from "../../../inputs/FlashcardReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => [FlashcardReviewCreateManyInput], {
    nullable: false
  })
  data!: FlashcardReviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
