import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyFK_SchoolInput } from "../inputs/UserCreateManyFK_SchoolInput";

@TypeGraphQL.InputType("UserCreateManyFK_SchoolInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyFK_SchoolInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyFK_SchoolInput], {
    nullable: false
  })
  data!: UserCreateManyFK_SchoolInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
