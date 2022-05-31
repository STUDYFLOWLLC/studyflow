import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolOrderByWithRelationInput } from "../../../inputs/SchoolOrderByWithRelationInput";
import { SchoolWhereInput } from "../../../inputs/SchoolWhereInput";
import { SchoolWhereUniqueInput } from "../../../inputs/SchoolWhereUniqueInput";
import { SchoolScalarFieldEnum } from "../../../../enums/SchoolScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSchoolArgs {
  @TypeGraphQL.Field(_type => SchoolWhereInput, {
    nullable: true
  })
  where?: SchoolWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchoolOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SchoolOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: true
  })
  cursor?: SchoolWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SchoolScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"SchoolID" | "Name" | "HasClassSupport"> | undefined;
}
