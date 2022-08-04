import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionOrderByWithRelationInput } from "../../../inputs/RepetitionOrderByWithRelationInput";
import { RepetitionWhereInput } from "../../../inputs/RepetitionWhereInput";
import { RepetitionWhereUniqueInput } from "../../../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  where?: RepetitionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RepetitionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RepetitionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: true
  })
  cursor?: RepetitionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
