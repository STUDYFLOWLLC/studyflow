import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_BlogInput } from "../inputs/UserCreateNestedOneWithoutFK_BlogInput";

@TypeGraphQL.InputType("BlogCreateInput", {
  isAbstract: true
})
export class BlogCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BlogID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_BlogInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_BlogInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | undefined;
}
