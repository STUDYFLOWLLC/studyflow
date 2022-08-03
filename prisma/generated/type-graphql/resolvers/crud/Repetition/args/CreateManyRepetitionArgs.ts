import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionCreateManyInput } from "../../../inputs/RepetitionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRepetitionArgs {
  @TypeGraphQL.Field(_type => [RepetitionCreateManyInput], {
    nullable: false
  })
  data!: RepetitionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
