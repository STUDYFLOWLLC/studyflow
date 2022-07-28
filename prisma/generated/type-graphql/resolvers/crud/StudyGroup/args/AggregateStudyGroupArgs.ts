import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupOrderByWithRelationInput } from "../../../inputs/StudyGroupOrderByWithRelationInput";
import { StudyGroupWhereInput } from "../../../inputs/StudyGroupWhereInput";
import { StudyGroupWhereUniqueInput } from "../../../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  where?: StudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StudyGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: StudyGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
